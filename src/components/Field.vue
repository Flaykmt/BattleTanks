<template>
	<div class="field">
		<div class="field-player" v-for="player in 2">
			<h2>{{ player === 1 ? 'First' : 'Second' }} Player:</h2>
			<div class="field-player-ground">
				<div class="field_cell" v-for="item in 100"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.field {
  display: flex;
  justify-content: space-between;
	&-player {
		h2 {
			font-size: 40px;
		}
		&-ground {
			display: grid;
			width: max-content;
			grid-template-columns: repeat(10, 1fr);
			grid-template-rows: repeat(10, 1fr);
			margin: 20px 0;
		}
	}
}

.field_cell {
	border: 1px solid black;
	width: 50px;
	height: 50px;
}
</style>
