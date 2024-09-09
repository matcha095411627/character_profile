<template>
  <section class="profile">
    <div class="container">
      <div class="row row-gap-3">
        <template v-for="character in OC" :key="character.engName">
          <div class="col-lg-4 col-md-6">
            <div class="card custom-card">
              <div class="card-body">
                <h4 class="card-title">{{ character.name }}</h4>
                <img :src="character.icon" alt="icon">
                <p class="card-text">{{ character.intro }}</p>
                <button type="button" @click="getProfile(character.engName)" class="btn btn-primary">See
                  Profile</button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>

</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCharacterStore } from '@/stores/character'

// 使用 Pinia 的 store
const characterStore = useCharacterStore()
const OC = ref(characterStore.OC)

const router = useRouter()
const getProfile = (id) => {
  router.push(`/profile/${id}`)
}
</script>

<style scoped></style>
