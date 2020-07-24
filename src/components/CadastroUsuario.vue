<template>
  <div >
    <div class="container mt-5">
    <div class="row">
      <div class="col-sm-6">
    <CreateForms :form="myForm" formName="cadastro"   />
    
      {{modelForm.name}} {{modelForm.sexo}}
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
import {mapState} from 'vuex';



import CreateForms from './CreateForms';

export default {
  name: 'CadastroUsuario',
  data:()=>{
    return{
      myForm:[{form:'input',type:'mail', model:'email'},
      {form:'input',type:'password',model:'password'},
      {form:'textarea',rows:'5',model:'descricao'},
      {form:'select',model:'sexo', options:[{value:'0',text:'Selecção 1'},{value:'1',text:'Seleção 2'}]},
      {form:'button',type:'button',class:'btn btn-outline-success',text:'Salvar',id:'botao'},
      ],
      myModel:{
        name:'',
        password:'',
        sexo:''

      }
    }
    
  },
  computed:{
    ...mapState('form',['modelForm'])
  },
  components: {
    CreateForms
  },
  methods:{
    ...mapActions('form',['modelActions','methodActions']),
    show(){
      console.log('teste')
    }
   
    
  },
  mounted(){
    this.modelActions(this.myModel)
    this.methodActions(this.show)
  }
  
}
</script>