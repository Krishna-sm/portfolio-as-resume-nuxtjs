<template>
    <header class="w-full bg-[--color1]">
                <nav class="w-[80%] mx-auto py-4 flex items-center justify-between flex-col md:flex-row ">
                        <NuxtLink href="/" class="text-2xl text-white font-[PoppinsSemiBold]">🧋 Krishna  </NuxtLink>

                        

                    <ul class="flex items-center gap-x-3 py-3 md:py-0 text-[--color1]">
                            <li class="text-white">
                                <!-- <NuxtLink href="/">Home</NuxtLink> -->
                                <button @click="index=0" >Home</button>

                            </li>
                           
                            <li class="text-white">
                                <button @click="index=1" >Skills</button>
                            </li>
                            <li class="text-white">
                                <button @click="index=3" >Contact</button>

                            </li>

                            <li>
                                        <!-- <NuxtLink href=""></NuxtLink> -->

                                                <button type="button" class="text-white transition-all duration-300 hover:bg-white  border hover:text-black px-4 py-2 rounded-sm">Resume</button>
                            </li>

                        
                    </ul>

                    
                </nav>
    </header> 
</template>

<script setup>
import { useIndex } from '~/store/ButtonIndex';

// import { mapMutations } from 'vuex'

// const index= computed(()=>$store.Menus.index)

let index =useIndex()

</script>