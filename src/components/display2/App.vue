<template>
    <v-container>
        <v-layout row justify-start>
            <v-layout v-for="item in list">
                <v-card>
                    <v-card-text>
                        {{ item }}
                    </v-card-text>
                </v-card>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                list: ({ todo }) => todo.list
            })
        }
    }
</script>
