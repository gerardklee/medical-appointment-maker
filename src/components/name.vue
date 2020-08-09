<template>
    <div>
        <b-row>
            <span class="question">
                What is your name?
            </span>
        </b-row>
        <div id="nameInput">
            <b-row>
                <b-col cols="4"></b-col>
                <b-col cols="4">
                    First Name: 
                    <b-form-input 
                        v-model="firstName" 
                        placeholder="Enter your first name"
                        style="text-align: center">
                    </b-form-input>
                </b-col>
            </b-row>
            <br/>
            <b-row>
                <b-col cols="4"></b-col>
                <b-col cols="4">
                    Last Name: 
                    <b-form-input 
                        v-model="lastName" 
                        placeholder="Enter your last name"
                        style="text-align: center">
                    </b-form-input>
                </b-col>
            </b-row>
            <br/>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            firstName: '',
            lastName: '',
            isValid: true,
        }
    },
    computed: {
        fullName() {
            return {firstName: this.firstName,
                    lastName: this.lastName};
        }
    },
    watch: {
        fullName(value) {
            if (value) {
                this.$emit('getFullName', value);
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
