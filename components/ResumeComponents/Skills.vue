<template>
   
                    <div class="mb-3">
                        <!-- <h1 class="text-3xl">Frontend</h1>

                        <div class="mb-3 py-4 w-full md:w-[80%] mx-auto flex gap-x-3">
                            
                            <div class=" w-1/3 rounded-full " v-for="item in items" >
                                <UTooltip :text="item" :popper="{ placement: 'top' }">
                                 <img src="https://krishna-web.vercel.app/media/react.svg"
                                    class="w-[50%] mx-auto p-3  border-4 transition-all duration-300  rounded-full border-[#D6D6D6] border-t-red-500    border-t-4"
                                  alt=""/>
                                  </UTooltip>   
                            </div>
                                    
                        </div> -->
 
                            

                        <div class=" w-[80%] flex  gap-x-4 flex-col md:flex-row  mx-auto bg-gray-900 py-5 px-4 rounded-md shadow-md">
                            <URadio color="yellow" v-for="method of SkillsCategories" :key="method.value" v-model="selected" @change="indexValue=0" v-bind="method" class="text-black flex gap-x-0" /></div>

                               
                                    <div class="mb-3 flex flex-col-reverse gap-y-6 md:flex-row w-full   md:w-[80%] py-5 mx-auto items-start">
                                                <div class=" w-full md:w-1/2 gap-x-2 gap-y-2 flex flex-wrap justify-center">
                                                     
                                                     
                                                     
                                                        <button @click="indexValue = index" v-for="(item, index) of SkillsItems[selected]" :key="index" class="px-6 py-2  rounded-md shadow-sm hover:shadow-lg  transition-all duration-300"
                                                        :class="indexValue === index?'border border-black':'bg-black text-white'"
                                                        >{{item.name}} </button>



                                                </div>
                                                <div class=" w-full md:w-1/2">
                                                        <h1 class="text-3xl text-center capitalize">
                                                                {{ selected }}
                                                        </h1>

                                                       <div class="px-5 my-3">
                                                        <UProgress :value="SkillsItems[selected][indexValue].percentage" animation="swing" indicator size="xl" color="yellow" /></div>




                                                </div>
                                    
                                    </div>




                    </div>

</template>

<script setup>
import { SkillsCategories, SkillsItems } from '~/apis/Skills';
 



const selected = ref('frontend')
const indexValue = ref(0)


// const 

</script>