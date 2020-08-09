<template>
    <div>
        <b-row>
            <span class="question">
                What is your address?
            </span>
        </b-row>
        <div id="nameInput">
            <b-row>
                <b-col cols="4"></b-col>
                <b-col cols="4">
                    Street: 
                    <b-form-input 
                        v-model="street" 
                        placeholder="Enter your street address"
                        style="text-align: center">
                    </b-form-input>
                </b-col>
            </b-row>
            <br/>
            <b-row>
                <b-col cols="4"></b-col>
                <b-col cols="1">
                    State: 
                    <b-form-input 
                        v-model="state" 
                        placeholder="State"
                        style="text-align: center">
                    </b-form-input>
                </b-col>
                <b-col cols="3">
                    Zip code: 
                    <b-form-input 
                        v-model="zipCode" 
                        placeholder="Enter zip code"
                        style="text-align: center">
                    </b-form-input>
                </b-col>
            </b-row>
        </div>
        <br/>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            street: '',
            zipCode: null,
            state: null,
            isValid: false
        }
    },
    computed: {
        fullAddress() {
            return {
                street: this.street,
                zipCode: this.zipCode,
                state: this.state,
            };
        }
    },
    watch: {
        fullAddress(value) {
            if (value) {
                this.$emit('getFullAddress', value);
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
