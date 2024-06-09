import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { ITank } from '@/interface/Tank'
import { Stage } from '@/Enum/Stage'

export const useTankStore = defineStore('tank', () => {
	// --- ТАНКИ ---
	const tanks: Array<ITank> = reactive([])

	// Добавление танков
	function addTank(i: number, j: number, stage: Stage) {
		if (stage === Stage.Preparation) {
			const tank = tanks.find(tank => tank.x === i && tank.y === j)
			if (tank) {
				const index = tanks.indexOf(tank)
				tanks.splice(index, 1)
			} else {
				tanks.length !== 10
					? tanks.push({ x: i, y: j })
					: console.log('Нельзя поставить больше 10 танков')
			}
		} else {
			return
		}
	}

  return { tanks, addTank }
})
