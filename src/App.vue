<template>
	<div>
		<h1>BattleTanks</h1>
		<h2>Этап: {{ stage === Stage.Game ? 'Идет игра' : 'Подготовительный' }}</h2>
		<div class="container">
			<Field />
		</div>
		<button @click="switchStage(tanks)">{{ stage === Stage.Game ? 'Прекратить игру' : 'Начать игру' }}</button>
	</div>
</template>

<script setup lang="ts">
import Field from './components/Field.vue';
import { storeToRefs } from 'pinia'
import { Stage } from './Enum/Stage';

// Stage
import { useStageStore } from '@/store/stage'
const store = useStageStore()
const { stage } = storeToRefs(store)
const { switchStage } = store 

// Tanks
import { useTankStore } from '@/store/tanks';
const { tanks } = storeToRefs(useTankStore())
</script>

<style scoped lang="scss">
</style>
 