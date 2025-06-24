<template>
  
  


  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 border-1 border-green-400 pb-10">
<div class="h-10 bg-amber-300"> </div>
<div class="px-4"> 
  <div v-if="about" class="prose dark:prose-invert">
      <component
        v-for="block in about.blocks"
        :key="block.id"
        :is="getBlockComponent(block.type)"
        :block="block.data"
      />
      </div>
    </div>


    </div>


  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">


    <div v-html="mission"></div>
    </div>


  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">



    <div v-html="vision"></div>
    </div>

  <div class="max-w-[980px] w-full grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4 border-1 border-green-400 pb-10">


    <div v-html="core_values"></div>
</div>



  

</template>
<script setup lang="ts">
import { computed } from 'vue'

import HeaderBlock from '../../components/blog-blocks/HeaderBlock.vue'
import ParagraphBlock from '../../components/blog-blocks/ParagraphBlock.vue'
import QuoteBlock from '../../components/blog-blocks/QuoteBlock.vue'
import CodeBlock from '../../components/blog-blocks/CodeBlock.vue'

import { useWebSiteStore } from '../../stores/useWebsite';

const  webStore = useWebSiteStore(); 
const about = computed (()=>webStore.about);
const mission = computed(()=>webStore.mission)
const vision = computed(()=>webStore.vision)
const core_values = computed(()=>webStore.core_values)


const getBlockComponent = (type: string) => {
  return {
    header: HeaderBlock,
    paragraph: ParagraphBlock,
    quote: QuoteBlock,
    code: CodeBlock,
  }[type] || ParagraphBlock
}


</script>