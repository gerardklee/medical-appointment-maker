<template>
    <div>
        <b-row>
            <span class="question">
                Check any of the symptoms you have below.
            </span>
        </b-row>
        <div id="symptoms">
        <b-form-checkbox
            id="checkbox-1"
            v-model="fever"
            name="checkbox-1"
            stacked
            >
            Fever or chills
        </b-form-checkbox>
        <b-form-checkbox
            id="checkbox-2"
            v-model="cough"
            name="checkbox-2"
            stacked
            >
            Cough
        </b-form-checkbox>
        <b-form-checkbox
            id="checkbox-3"
            v-model="shortBreath"
            name="checkbox-3"
            >
            Short breadth
        </b-form-checkbox>
        <b-form-checkbox
            id="checkbox-4"
            v-model="fatigue"
            name="checkbox-4"
            >
            Fatigue
        </b-form-checkbox>
        <b-form-checkbox
            id="checkbox-5"
            v-model="aches"
            name="checkbox-5"
            >
            Aches
        </b-form-checkbox>
        <b-form-checkbox
            id="checkbox-6"
            v-model="headache"
            name="checkbox-6"
            >
            Headache
        </b-form-checkbox>
        <b-row>
            <b-col cols="4"></b-col>
            Others: 
            <b-col cols="4">
                <b-form-input 
                    v-model="other" 
                    style="text-align: center"
                    size="sm">
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
            isValid: false,
            fever: false,
            cough: false,
            shortBreath: false,
            fatigue: false,
            aches: false,
            headache: false,
            other: ''
        }
    },
    computed: {
        Symptoms() {
            return {fever: this.fever,
                    cough: this.cough,
                    shortBreath: this.shortBreath,
                    fatigue: this.fatigue,
                    aches: this.aches,
                    headache: this.headache,
                    other: this.other
                    };
        }
    },
    watch: {
        Symptoms(value) {
            if (value) {
                this.$emit('getSymptoms', value);
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