import pokemonApi from "src/api/pokemonApi";

// export function someAction (/* context */) {
// }
export async function getPokemonsApi ({commit, state}) {

    commit('onLoading')

    const {data} = await pokemonApi.get(`pokemon?offset=${state.offset}&limit=${state.limit}`)

    console.log(data);

    const  pokemons = await Promise.all(
        data.results.map( async(el) => {
            const { data: {name, sprites:{front_default} } } = await pokemonApi.get(`pokemon/${el.name}/`)
            return {
                name,
                url: front_default
            }
        })
    )
    commit('offLoading')
    commit('getPokemons', pokemons)
}
export async function getUpdatePokemonsApi ({commit, state}) {

    commit('onLoading')

    const {data} = await pokemonApi.get(`pokemon?offset=${state.offset}&limit=${state.limit}`)

    const  pokemons = await Promise.all(
        data.results.map( async(el) => {
            const { data: {name, sprites:{front_default} } } = await pokemonApi.get(`pokemon/${el.name}/`)
            return {
                name,
                url: front_default
            }
        })
    )

    commit('offLoading')
    commit('getUpdatePokemons', pokemons)
}

export async function getPokemonByIdApi ({commit}, pokemon) {
    try {
        const { data: {name, sprites:{front_default} } } = await pokemonApi.get(`pokemon/${pokemon}/`)
        pokemon = {
            name,
            url:front_default
        }
    } catch (error) {
        pokemon = error.response.status
    }
    commit('getPokemonById', pokemon)
}
export async function getPokemonByIdDetailsApi ({commit}, pokemon) {
    try {
        const { data: {name, sprites:{front_default}, types, stats } } = await pokemonApi.get(`pokemon/${pokemon}/`)
        pokemon = {
            name,
            url:front_default,
            types,
            stats
        }
    } catch (error) {
        pokemon = error.response.status
    }
    commit('getPokemonByIdDetails', pokemon)
}