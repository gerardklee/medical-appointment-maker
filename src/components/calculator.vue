<template>
    <div class="calculator">
        <b-container>
            <b-row>
                <b-col>
                    <b-form-input 
                        placeholder="0"
                        :readOnly="isReadOnly"
                    ></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">7</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">8</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">9</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">%</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">4</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">5</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">6</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">X</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">\</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">1</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">2</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">3</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">-</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">+</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">.</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">0</b-button>
                </b-col>
                <b-col cols="0">
                    <b-button variant="outline-primary" size="lg">=</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            message: 'Begin Calculator',
            isReadOnly: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
