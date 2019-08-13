<template>
    <v-card>
        <v-list>
            <v-list-item v-for="item in list">
                <v-list-item-content>
                    <v-list-item-title v-html="item"/>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
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
