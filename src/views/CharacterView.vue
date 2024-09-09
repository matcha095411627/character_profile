<template>
  <section class="character">
    <div class="container py-5">
      <div v-if="character">
        <h3>{{ character.name }}<img :src="character.icon"></h3>

        <p> {{ character.engName }}</p>
        <template v-if="character.sex">
          <p v-if="character.sex === 'male'">性別: 男</p>
          <p v-else-if="character.sex === 'female'">性別: 女</p>
          <p v-else>性別: {{ character.sex }}</p>
        </template>
        <p>年齡: {{ character.age }}</p>
        <p>身高: {{ character.height }}cm</p>
        <p>生日: {{ character.birthday }}</p>
        <p v-if="character.category">類型: {{ character.category }}</p>
        <template v-if="character.world">
          <p v-if="character.world_link">
            世界：<a :href="character.world_link" target="_blank">{{ character.world }}</a>
          </p>
          <p v-else>世界：{{ character.world }}</p>
        </template>
        <!-- <p>簡介: {{ character.intro }}</p> -->
        <p v-if="character.is_married">
          CP: {{ characterCP.CP_name }}
          <img :src="characterCP.CP_icon">
        </p>
      </div>
      <div v-else>
        <p>Loading character data...</p>
      </div>
    </div>
  </section>
  <section class="images">
    <div class="container">
      <div v-if="characterImages.length > 0">
        <ul class="row list-unstyled justify-content-center">
          <li class="col-lg-4 col-md-6" v-for="(image, index) in characterImages" :key="index">
            <div class="card h-100"><img :src="image" alt="Character Image" class="object-fit-cover h-100 rounded"></div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No images available.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCharacterStore } from '@/stores/character'
import { useCharacterImagesStore } from '@/stores/characterImages'
import { useCharacterCPStore } from '@/stores/characterCP'

// 使用 Pinia 的 store
const characterStore = useCharacterStore()
const characterImagesStore = useCharacterImagesStore()
const characterCPStore = useCharacterCPStore()

// 定義 character 和 characterImages 變量用於存儲當前角色信息和圖片信息
const character = ref({})
const characterImages = ref([])
const characterCP = ref({})

// 使用 route 來獲取網址參數
const route = useRoute()

onMounted(() => {
  const nameId = route.params.nameId
  // 查找並賦值當前角色信息
  character.value = characterStore.OC.find(c => c.engName === nameId)
  const characterImageEntry = characterImagesStore.OCimages.find(c => c.engName === nameId)
  // 如果有找到圖片資料，則賦值給 characterImages
  if (characterImageEntry) {
    characterImages.value = characterImageEntry.images
  }
  characterCP.value = characterCPStore.OC_CP.find(c => c.engName === nameId)
})
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  width: 100%;
  height: 300px;
  /* 設置具體高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
