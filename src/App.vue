<template>
    <div id="app">
        <Intro></Intro>
        <Name @getFullName="updateName($event)"></Name>
        <Address @getFullAddress="updateAddress($event)"></Address>
        <PhoneNumber @getPhoneNum="updatePhoneNum($event)"></PhoneNumber>
        <Symptom @getSymptoms="updateSymptoms($event)"></Symptom>
        <Appointment @getDate="updateDate($event)"></Appointment>
        <Consent @getConsentInfo="updateConsentInfo($event)"></Consent>
        <br/>
        <b-row>
            <b-col>
                <b-button variant="outline-primary" :disabled="!isValid" @click="clickSave">SAVE</b-button>
            </b-col>
        </b-row>
        <br/>
        <p style="color: red;" v-if="errorMessage"> {{ errorMessage }} </p>
    </div>
</template>

<script>
import Intro from './components/introduction.vue';
import Name from './components/name.vue';
import Address from './components/address.vue';
import PhoneNumber from './components/phonenumber.vue';
import Symptom from './components/symptoms.vue';
import Appointment from './components/appointment.vue';
import Consent from './components/consent.vue';
import DB from './indexedDb.js';
import DBList from './dblist.js';
export default {
    name: 'App',
    components: {
        Intro,
        Name,
        Address,
        PhoneNumber,
        Symptom,
        Appointment,
        Consent
    },
    data: function() {
        return {
            isValid: true,
            errorMessage: '',
            dbName: 'MedicalSupport',
            version: 1,
            symptom: {
                fever: '',
                cough: '',
                shortBreath: '',
                fatigue: '',
                aches: '',
                headache: '',
                other: '',
            },
            allData: {
                firstName: '',
                lastName: '',
                street: '',
                zipCode: null,
                state: null,
                phoneNumber: null,
                date: null,
                isChild: null,
                appointee: null
            }
        }
    },
    
    methods: {
        async clickSave() {
            /*
            for (let key in this.allData.symptom) {
                if (!this.allDAta.symptom[key]) {
                    this.errorMessage = 'please insert N/A if no symptoms';
                    return;
                }
            }

            for (let key in this.allData) {
                if (key === 'isChild') {
                    continue;
                }
                if (!this.allData[key]) {
                    this.errorMessage = 'please fill out ' + key;
                    return;
                }
            }
            this.errorMessage = '';
            alert('passed all cases');
            */
            console.log(DBList);
            if (this.dbName in DBList && DBList[this.dbName] == this.version) {
                alert('db already exists')
                return;
            } else {
                const database = await DB.createDB(this.dbName, this.version);
                console.log('created');
                console.log('database: ', database);
            }   
        },
        updateName(data) {
            this.allData.firstName = data['firstName'];
            this.allData.lastName = data['lastName'];
        },
        updateAddress(data) {
            console.log(data);
            this.allData.street = data['street'];
            this.allData.zipCode = data['zipCode'];
            this.allData.state = data['state'];
        },
        updatePhoneNum(data) {
            console.log('phone: ', data);
            this.allData.phoneNumber = data;
        },
        updateSymptoms(data) {
            console.log(data);
            this.symptom.fever = data['fever'];
            this.symptom.cough = data['cough'];
            this.symptom.shortBreath = data['shortBreath'];
            this.symptom.fatigue = data['fatigue'];
            this.symptom.aches = data['aches'];
            this.symptom.headache = data['headache'];
            this.symptom.other = data['other'];
        },
        updateDate(data) {
            this.allData.date = data;
        },
        updateConsentInfo(data) {
            console.log(data);
            if (data['guardian']) {
                this.allData.isChild = data['guardian'];
                this.allData.appointee = data['appointee'];
            } else {
                this.allData.isChild = data['guardian'];
                this.allData.appointee = this.allData.firstName + '' + this.allData.lastName;
            }
        }
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
