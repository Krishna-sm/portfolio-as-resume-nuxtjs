<template>

        <UForm :schema="schema" :state="states"  @submit="onSubmit"  action="" class=" w-[90%] md:w-[50%] mx-auto flex flex-col space-y-2">

                        <!-- <div class="mb-3">
                                <label for="name">Name</label>
                                <input v-model="states.name" type="text" name="" id="name" class="w-full py-3 px-5 rounded-md border outline-none bg-transparent" placeholder="Enter Your Name">
                        </div> -->
                        <!-- <div class="mb-3"> -->
                                <!-- <label for="email">Email</label>
                                <input v-model="states.email" type="email" name="" id="email" class="w-full py-3 px-5 rounded-md border outline-none bg-transparent" placeholder="John@gmail.com"> -->
                                <!-- <UFormGroup class="mb-3 text-black"  label="Email" >
    <UInput :loading="false" color="black"  class="mb-3" placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup> -->
                        <!-- </div> -->
                        <!-- <div class="mb-3">
                                <label for="msg">Message</label>
                                <textarea  v-model="states.msg" rows="5" cols="20" name="" id="msg" class="w-full py-3 px-5 rounded-md border outline-none bg-transparent" placeholder="type something..."></textarea>
                        </div> -->
                        <UFormGroup   name="name"  >
  <template #label>
        <label for="name" class="text-black">Name</label>
  </template>
      <UInput v-model="states.name" id="name" class="bg-transparent " variant="input" input-class="w-full py-3 px-5 rounded-md border focus:border-[--color1] outline-none bg-transparent ring-0 focus:ring-0  "  placeholder="Enter Your Name"  icon="i-heroicons-user"  autocomplete="off" />
    </UFormGroup>

  <UFormGroup   name="email"  >
  <template #label>
        <label for="email" class="text-black">Email</label>
  </template>
      <UInput v-model="states.email" id="email" class="bg-transparent " variant="input" input-class="w-full py-3 px-5 rounded-md border focus:border-[--color1] outline-none bg-transparent ring-0 focus:ring-0  " autocomplete="off"  placeholder="Enter Your Email"  icon="i-heroicons-envelope"  />
    </UFormGroup>

    <UFormGroup   name="msg"  >
  <template #label>
        <label for="message" class="text-black">Message</label>
  </template>
      <UTextarea v-model="states.msg" id="message" class="bg-transparent "  textarea-class="w-full py-3 px-5 rounded-md border focus:border-[--color1] outline-none bg-transparent ring-0 focus:ring-0  " variant="input"  placeholder="Type Something..."  icon="i-heroicons-light"  />
    </UFormGroup>


                        <div class="mb-3">
                                <button class="w-full bg-black text-white text-center py-3 rounded-md hover:bg-zinc-900 transition-all  outline-none border-none duration-300">Submit</button>

                        </div>
                        
        </UForm>

        <div class=" w-[90%] md:w-[50%] mx-auto flex justify-between my-5 bg-white  rounded-md shadow-sm items-center flex-col py-6 gap-y-2 px-4" >

                <button class="py-3  w-full inline-flex items-center justify-center gap-x-3 bg-gray-900 rounded-lg text-white outline-none border-none">
                                        <Icon name="uil:github" class="text-4xl" /> <span>Github</span>
                                </button>
                                
                                <button class="py-3  w-full inline-flex items-center justify-center gap-x-3 bg-gray-900 rounded-lg text-white outline-none border-none">
                                        <Icon name="uil:instagram" class="text-4xl" /> <span>Instagram</span>
                                </button>
                                <button class="py-3  w-full inline-flex items-center justify-center gap-x-3 bg-gray-900 rounded-lg text-white outline-none border-none">
                                        <Icon name="uil:linkedin" class="text-4xl" /> <span>Linkedin</span>
                                </button>
                <!-- <button class="p-2 flex items-center justify-center bg-black text-white rounded-full hover:text-black hover:bg-white hover:border hover:border-black transition-all duration-300">
                    <Icon name="uil:github" class="text-4xl" />
                </button>
                <button class="p-2 flex items-center justify-center bg-black text-white rounded-full hover:text-black hover:bg-white hover:border hover:border-black transition-all duration-300">
                    <Icon name="uil:instagram" class="text-4xl" />
                </button>
                <button class="p-2 flex items-center justify-center bg-black text-white rounded-full hover:text-black hover:bg-white hover:border hover:border-black transition-all duration-300 ">
                    <Icon name="uil:linkedin" class="text-4xl" />
                </button> -->

</div> 


</template>


<script setup >

                        import * as yup from 'yup'; 

                        const schema = yup.object().shape({
                                name:yup.string().required("Name is Required "),
                                email:yup.string().email("Enter Valid Email ").required("Email is required"),
                                msg:yup.string().required("Message is Required")
                        })

                        const states = reactive({
                                name:'',
                                email:'',
                                msg:''
                        })

                        const toast = useToast()

                        // type Schema = InferType<typeof schema>;

                async function onSubmit (event) {
                // Do something with event.data
                toast.add({
                        title:'Success', 
                        closeButton:true 
                })
                console.log(event.data) 

                states.email = '';
                states.name = '';
                states.msg = '';
                }


                

</script>
