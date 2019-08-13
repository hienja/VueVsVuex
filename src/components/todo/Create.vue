<template>
    <v-card>
        <v-card-text>
            <v-text-field v-model="input"/>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="onAdd">
                Add
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            onAdd() {
                this.$emit('add', this.input)
                this.input = ''
            }
        }
    }
</script>
