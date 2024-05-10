<template>
	<div class="field">
		<div class="field-player">
			<h2>First Player:</h2>
			<div class="field-player-ground">
				<div class="field_cell" v-for="(item, idx) in cell" :key="idx">
					<div
						:class="{'active': checkTank(idx, index)}"
						class="field_cell"
						v-for="(cell, index) in item"
						@click="addTank(idx, index)"
						:key="index"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// --- КЛЕТКИ ---
// Отрисовка клеток через двумерный массив
const cell: Array<Array<Object>> = reactive([])

for (let i = 0; i < 10; i++) {
	cell.push([])
	for (let idx = 0; idx < 10; idx++) {
		cell[i].push({})
	}
}

// --- ТАНКИ ---
interface ITank {
	x: number
	y: number
}

// Проверяем есть ли танки на поле чтобы мы смогли дать Div класс active(окрашивается в зеленый)
function checkTank(x: number, y: number) {
	for (let tank of tanks) {
		if (tank.x === x && tank.y === y) {
			return true
		}
	}
}

const tanks: Array<ITank> = reactive([])

// Добавление танков (Уберу в Pinia)
function addTank(i: number, j: number) {
	const tank = tanks.find((tank) =>  tank.x === i && tank.y === j)
	if (tank) {
			const index = tanks.indexOf(tank)
			tanks.splice(index, 1)
		} else {
			tanks.length !== 10 ? tanks.push({x: i, y: j}) : console.log('Нельзя поставить больше 10 танков');
		}
}
</script>

<style scoped lang="scss">
.field {
	display: flex;
	justify-content: space-between;
	&-player {
		h2 {
			font-size: 40px;
		}
		&-ground {
			display: flex;
		}
	}
}

.field_cell {
	border: 1px solid #101010;
	width: 50px;
	height: 50px;
}

.active {
	background-color: rgb(27, 128, 27);
}
</style>
