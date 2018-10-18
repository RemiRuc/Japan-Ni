<template>
    <div class="background">
        <div v-bind:style="{ backgroundImage: 'url(' + bg + ')' }"></div>
    </div>
</template>

<script>
export default {
    name: 'Background',
    props: ['bg']
}
</script>

<style scoped>
    .background{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
    }

    .background div{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        animation-name: anim;
        animation-duration: 15s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
    }
    .background::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.83;
        background-color: #0b0f27;
        z-index: 1;
    }

    @keyframes anim {
        from{transform: scale(1.2)}
        to{transform: scale(1)}
    }
</style>

