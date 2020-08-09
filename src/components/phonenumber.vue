<template>
    <div>
        <b-row>
            <span class="question">
                What is your phone number?
            </span>
        </b-row>
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <b-form-input 
                    v-model="phoneNumber" 
                    placeholder="e.g) 123-456-7890"
                    style="text-align: center">
                </b-form-input>
            </b-col>
            <b-col cols="4"></b-col>
        </b-row>
        <br/>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            phoneNumber: null,
            isValid: false
        }
    },
    watch: {
        phoneNumber(value) {
            if (value) {
                this.$emit('getPhoneNum', value);
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
