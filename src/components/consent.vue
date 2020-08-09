<template>
    <div>
        <b-row>
            <span class="question">
                Is this appointment for you?
            </span>
        </b-row>
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <input type="radio" v-model="appointee" value="self" v-on:click="clickSelf"> Yes, this is for myself
            </b-col>
        </b-row>
        <br/>
        <input type="radio" v-model="appointee" value="" v-on:click="clickChild"> No, this is for my child.
            <b-collapse id="collapse-1" class="mt-2" :visible="isForChild">
                <b-row>
                    <b-col cols="4"></b-col>
                    <b-col cols="4">
                        <b-form-input 
                            v-model="appointee" 
                            placeholder="Please print your child's name with space"
                            style="text-align: center">
                        </b-form-input>
                    </b-col>
                </b-row>
            </b-collapse>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isForSelf: true,
            isForChild: false,
            appointee: null,
            guardian: false
        }
    },
    computed: {
        consentInfo() {
            return {
                guardian: this.guardian,
                appointee: this.appointee
            }
        }
    },
    watch: {
        consentInfo(val) {
            this.$emit('getConsentInfo', val);
        }
    },
    methods: {
        clickSelf() {
            this.isForChild = false;
            this.guardian = false;
        },
        clickChild() {
            this.isForChild = true;
            this.guardian = true;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
