<template>
	<div class="field">
		<div class="field-player">
			<h2>First Player:</h2>
			<div class="field-player-ground">
				<div class="field_cell" v-for="(item, idx) in cell" :key="idx">
					<div class="field_cell" v-for="(cell, index) in item" :key="index"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface ICell {
	active: boolean
}

const cell: Array<Array<ICell>> = reactive([])

for (let i = 0; i < 10; i++) {
	cell.push([])
	for (let idx = 0; idx < 10; idx++) {
		cell[i].push({ active: false })
	}
}

console.log(cell);

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
	border: 1px solid black;
	width: 50px;
	height: 50px;
}

.active {
	background-color: black;
}
</style>
