<script setup >
import { ProjectCategories,ProjectsList } from '~/apis/Projects';

let selected = ref("frontend")

</script>

<template>
     <div class=" w-[80%] flex   gap-x-4 flex-col md:flex-row  mx-auto bg-gray-900 py-5 my-5 px-4 rounded-md shadow-md">
        <URadio color="yellow" v-for="method of ProjectCategories" :key="method.value" v-model="selected"   v-bind="method" class="text-black flex gap-x-0" /></div>
  
        <div class="flex mb-3  gap-x-2 gap-y-3 flex-wrap">

                        <div  v-for="list of  ProjectsList[selected]" class="  w-[97%]   md:w-[45%]  lg:w-[30%]   min-h-40 rounded-md border-4 border-yellow-500 shadow-sm">
                                <div class=" p-2 hover:p-1 transition-all duration-300 overflow-hidden  ">
                                
                        <img :src="list" alt=""
                        class="hover:rounded-2xl transition-all duration-300"
                        /></div>
                                        <!-- <div class="mb-3"> -->
                                        
                                                <!-- <h1 class="text-2xl font-semibold text-white text-center">Javascript</h1>

                                                <p class="my-3 text-white text-sm px-5 text-center">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p> -->
                                        <!-- </div> -->

                        </div>


        
        </div>


</template>