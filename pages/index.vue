<template>
  <section class="py-10 flex items-center flex-col justify-center w-full bg-[--color2]">
    <div class="mb-3 w-full items-center justify-center">

            <!-- <div class="relative">
                  <button class="bottom-0 absolute right-0  "> 😊 </button>

            </div> -->

            
              <img
        src="https://avatars.githubusercontent.com/u/105251808?v=4"
        alt=""
        class="mx-auto w-1/2 md:w-[20%] rounded-full transition-all duration-300 hover:p-3 hover:border-2 border-[#1c1b17]"
      />
          <div class="my-3">
              <h1 class="text-center   font-semibold text-2xl md:text-4xl"><span class="bg-[#B1ECC6] px-2" >Hi, I Am <span class="bg-[#7AEDBC] px-3 font-[PoppinsBlack]"> Krishna Bansal</span> </span> 👋</h1>
          </div>

    </div>

    <div class="w-full py-4 px-10 md:px-0">
      <ul class="w-full flex items-center mx-auto justify-center gap-x-1 py-3 px-10 md:px-0">
        <li>
          <button @click="index=0" :class="index===0? 'bg-black  text-white rounded-sm':'border border-black'" class="px-4 py-2 text-sm md:text-base">About</button>
        </li>
        <li>
          <button @click="index=1" :class="index===1? 'bg-black  text-white rounded-sm':'border border-black'" class="px-4 py-2 text-sm md:text-base">Skills</button>
        </li>
        <li>
          <button @click="index=2" :class="index===2? 'bg-black  text-white rounded-sm':'border border-black'" class="px-4 py-2 text-sm md:text-base">Projects</button>
        </li>
        <li>
          <button @click="index=3" :class="index===3? 'bg-black  text-white rounded-sm':'border border-black'" class="px-4 py-2 text-sm md:text-base">Contact</button>
        </li>
        <li>
          <button :class="false? 'bg-black  text-white rounded-sm':'border border-black'" class="px-4 py-2 text-sm md:text-base">Resume</button>
        </li>
      </ul>
    </div>

                        <div class="w-[96%] lg:w-[80%] mx-auto  mb-3 ">
 
                                  <template v-if="index==0">
                                        <About />
                                 </template>
                                 <template v-if="index==1">
                                        <Skills />
                                 </template>
                                 <template v-if="index==2">
                                        <Projects />
                                 </template>
                                 <template v-if="index==3">
                                        <Contact />
                                 </template>
                                    <!-- <h1 v-show="index==0">sad</h1> -->
                                

                        </div>        

  </section>
</template>

<script setup>

import About from "../components/ResumeComponents/About.vue";
import Skills from "../components/ResumeComponents/Skills.vue";
import Projects from "../components/ResumeComponents/Projects.vue";
import Contact from "../components/ResumeComponents/Contact.vue";
import { useIndex } from "~/store/ButtonIndex";

useHead({
  title: "🧋 Krishna Portfolio",
});


                // let index = ref(0);

                let index =useIndex()

</script>
