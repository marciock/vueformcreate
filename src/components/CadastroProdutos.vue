<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-6">
            <CreateForms :form="myForm" formName="produtos"   />

            
            </div>
        </div>
    </div>
</template>
<script>
import CreateForms from './CreateForms';

export default {
    name:'CadastroProdutos',
    components:{
        CreateForms
    },
    data:()=>{
        return{
            myForm:[
                {form:'input',label:'Produto',type:'text',model:'produto'},
                {form:'select',label:'Marca',model:'marca',options:[
                {value:'1',text:'cce'},
                {value:'2',text:'samsung'},
                {value:'3',text:'tecpix'},
            ]},
                {form:'textarea',label:'Descrição',rows:'3',model:'descricao'}
            ],
            myModel:{
            produto:'',
            marca:'',
            descricao:''
            },
           

        }
        
        
    }

    
}
</script>