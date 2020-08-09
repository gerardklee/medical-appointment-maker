<template>
    <div>
        <b-row>
            <span id="intro">
                {{ introMessage }}
            </span>
        </b-row>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            introMessage: 'Please Fill Out the Form Below',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #intro {
        text-align: center;
        width: -webkit-fill-available;
        font-size: 3em;
        color: rgb(0, 0, 0);
        line-height: 1.2em;
        height: 13vh;
    }
</style>
