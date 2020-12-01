<template>
    <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="part">
            <a :href="part.href">
                <a-card :src="part.href" :title="part.name" :hoverable="true">
                    {{part.desc}}
                </a-card>
            </a>
        </a-list-item>
    </a-list>
</template>

<script>

const data = [
    {name: "Part 1", desc: "Description of Part 1", href: 'https://www.antdv.com/'},
    {name: "Part 2", desc: "Description of Part 2", href: 'https://www.antdv.com/'},
    {name: "Part 3", desc: "Description of Part 3", href: 'https://www.antdv.com/'},
    {name: "Part 4", desc: "Description of Part 4", href: 'https://www.antdv.com/'},
    {name: "Part 5", desc: "Description of Part 5", href: 'https://www.antdv.com/'},
    {name: "Part 6", desc: "Description of Part 6", href: 'https://www.antdv.com/'},
    {name: "Part 7", desc: "Description of Part 7", href: 'https://www.antdv.com/'},
];

export default {
    name: "PartTab",
    data (){
        return {data};
    }
}
</script>