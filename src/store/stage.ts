import { defineStore } from 'pinia'
import { Stage } from '@/Enum/Stage'
import { ITank } from '../interface/Tank'
import { ref } from 'vue'

export const useStageStore = defineStore('stage', () => {

	const stage = ref<Stage>(Stage.Preparation)

	function switchStage(tanks: Array<ITank>) {
		if (tanks.length === 10) {
			stage.value === Stage.Preparation
				? (stage.value = Stage.Game)
				: (stage.value = Stage.Preparation)
		} else {
			console.log('Поставьте 10 танков чтобы начать играть')
		}
	}

	return { stage, switchStage }
})
