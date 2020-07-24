<template>
    <div>
        <form v-bind:id="formName"  >
            <div class="form-group" v-for="(ele ,index) in form" :key="index"> 
                <label>{{ele.label}}</label>
                <input :type="ele.type" class="form-control" v-if="ele.form==='input'" v-model="modelForm[ele.model]"> 
                <select  class="form-control" v-if="ele.form==='select'" v-model="modelForm[ele.model]"> 
                    <option v-for="opt in ele.options" :key="opt.value" :value="opt.value">{{opt.text}}</option>
                </select>
                 <button :type="ele.type" :class="ele.class" v-if="ele.form==='button'" v-html="ele.text" @click="stateMethod" ></button>
                 <textarea :rows="ele.rows" class="form-control" v-model="modelForm[ele.model]" v-if="ele.form==='textarea'"></textarea>
            </div>

        </form>
    </div>
    
</template>
<script>
import {mapState} from 'vuex';
export default {
    name:'CreateForms',
    data:()=>{
        return{
            element:'',
            models:{}
        }
    },
    props:['formName','form'],
    computed:{
        ...mapState('form',['modelForm','stateMethod'])
    },
    methods:{
        
       send(){
           this.$emit('model',{model:this.models});
       }
    },
    created(){
       // this.send()
    }
   
}
</script>