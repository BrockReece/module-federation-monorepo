<template>
    <div v-if="loading">Loading</div>
    <div v-else>
        <h4>Popular Languages</h4>
        <div v-for="country in countries" :key="country.code">
            {{ country.name }}
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import { useQuery, useResult } from '@vue/apollo-composable'

export default {
    name: 'Countries',

    setup() {
        const { result, loading } = useQuery(gql`
            query fetchPopularCountries {
                popularCountries {
                    code
                    name
                }
            }
        `, {}, { 
            // fetchPolicy: 'cache-and-network' 
        })
        const countries = useResult(result, [], data => data.popularCountries)
        return {
            countries,
            loading
        }
    }
}
</script>