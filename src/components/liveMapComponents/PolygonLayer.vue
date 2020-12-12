<template>

    <v-stage 
        ref="stageObject"
        :config="stage"
        @mousedown="handleStageMouseDown"
        @touchstart="handleStageMouseDown"
        @wheel="handleWheel"
    >

        <v-layer ref="mapImgLayer">

            <MapImg @stageSize="stageSizeMutator"/>

        </v-layer>

        <v-layer ref="layer">

            <v-rect
                v-for="item in rectangles"
                :key="item.id"
                :config="item"
                @transformend="handleTransformEnd"
            />

            <v-transformer ref="transformer" />
        </v-layer>
    </v-stage>
</template>

<script>

import MapImg from './MapImg.vue';


const width = window.innerWidth;
const height = window.innerHeight;
const scaleBy = 1.1; //for scrollwheel scaling


export default {

    components: {
        MapImg
    },

    data() {
        return {
            stage: {
                x: 0,
                y: 0,
                width: width,
                height: height,
                draggable: true,
                scaleX : 1,
                scaleY : 1
            },
            rectangles: [
                {
                    rotation: 0,
                    x: 737.9488695979911,
                    y: 34.86822451433958,
                    width: 100,
                    height: 100,
                    scaleX: 1.7805113040201124,
                    scaleY: 5.856171151216743,
                    fill: 'red',
                    name: 'rect1',
                    draggable: true,
                    opacity: 0.3
                },
                {
                    rotation: 0,
                    x: 368.23097709744985,
                    y: 253.3423888333654,
                    width: 100,
                    height: 100,
                    scaleX: 2.494959484233252,
                    scaleY: 2.3594570012600746,
                    fill: 'green',
                    name: 'rect2',
                    draggable: true,
                    opacity: 0.3
                },
                {
                    rotation: 0,
                    x: 13.999999999999925,
                    y: 539.0000000000005,
                    width: 100,
                    height: 100,
                    scaleX: 4.772761848800234,
                    scaleY: 1.3013739025922908,
                    fill: 'red',
                    name: 'rect3',
                    draggable: true,
                    opacity: 0.3
                },
                {
                    rotation: 0,
                    x: 175.21707198009048,
                    y: 245.21788100016988,
                    width: 100,
                    height: 100,
                    scaleX: 1.4478292801990866,
                    scaleY: 2.617821189998313,
                    fill: 'green',
                    name: 'rect4',
                    draggable: true,
                    opacity: 0.3
                },
                {
                    rotation: 0,
                    x: 14.000000000000007,
                    y: 42.00000000000004,
                    width: 100,
                    height: 100,
                    scaleX: 1.8269773373458313,
                    scaleY: 1.8480603225384533,
                    fill: 'blue',
                    name: 'rect5',
                    draggable: true,
                    opacity: 0.3
                },
            ],
            selectedShapeName: '',
        };
    },
    methods: {

        stageSizeMutator(width, height){
            this.stage.width = width;
            this.stage.height = height;
        },

        handleTransformEnd(e) {
            // shape is transformed, let us save new attrs back to the node
            // find element in our state
            const rect = this.rectangles.find(
                (r) => r.name === this.selectedShapeName
            );
            // update the state
            rect.x = e.target.x();
            rect.y = e.target.y();
            rect.rotation = e.target.rotation();
            rect.scaleX = e.target.scaleX();
            rect.scaleY = e.target.scaleY();
        },

        handleStageMouseDown(e) {
            // clicked on stage - clear selection
            if (e.target === e.target.getStage()) {
                this.selectedShapeName = '';
                this.updateTransformer();
                return;
            }

            // clicked on transformer - do nothing
            const clickedOnTransformer = e.target.getParent().className === 'Transformer';
            if (clickedOnTransformer) {
                return;
            }

            // find clicked rect by its name
            const name = e.target.name();
            const rect = this.rectangles.find((r) => r.name === name);
            if (rect) {
                this.selectedShapeName = name;
            } else {
                this.selectedShapeName = '';
            }
            this.updateTransformer();
        },


        handleWheel(e) {
           const stage = e.target.getStage();

           var oldScale = stage.scaleX();

           var pointer = stage.getPointerPosition();

            console.log(pointer.x);
            console.log(pointer.y);
            console.log(e.evt.deltaY);
            console.log(oldScale);

           var mousePointTo = {
              x: (pointer.x - stage.x()) / oldScale,
              y: (pointer.y - stage.y()) / oldScale,
            };

            var newScale =
              e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

            stage.scale({ x: newScale, y: newScale });

            var newPos = {
              x: pointer.x - mousePointTo.x * newScale,
              y: pointer.y - mousePointTo.y * newScale,
            };
            stage.position(newPos);
            stage.batchDraw();
        },


        updateTransformer() {
            // here we need to manually attach or detach Transformer node
            const transformerNode = this.$refs.transformer.getNode();
            const stage = transformerNode.getStage();
            const { selectedShapeName } = this;

            const selectedNode = stage.findOne('.' + selectedShapeName);
            // do nothing if selected node is already attached
            if (selectedNode === transformerNode.node()) {
                return;
            }

            if (selectedNode) {
                // attach to another node
                transformerNode.nodes([selectedNode]);
            } else {
                // remove transformer
                transformerNode.nodes([]);
            }
            transformerNode.getLayer().batchDraw();
        },
    },
};
</script>
