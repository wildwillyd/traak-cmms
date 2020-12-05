<template>
    <div>
        {{curPart.desc}} <br>
        Location: {{curPart.location}}
    </div>
</template>

<script>
export default {
    name: 'PartDesc',
    props: ['curPart']
    
}
</script>