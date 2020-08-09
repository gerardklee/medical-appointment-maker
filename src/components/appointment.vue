<template>
    <div>
        <b-row>
            <span class="question">
                Select your preferred appointment date.
            </span>
        </b-row>
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <b-form-datepicker v-model="date"></b-form-datepicker>
            </b-col>
        </b-row>
        <br/>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            date: null
        }
    },
    computed: {

    },
    watch: {
        date(val) {
            if (val) {
                this.$emit('getDate', val);
            }
        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
