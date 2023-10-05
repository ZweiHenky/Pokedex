export function someMutation (state, payload) {
}
export function getPokemons (state, pokemons) {
    state.pokemons = [...state.pokemons, ...pokemons]
    state.isLoading = false
}
export function getUpdatePokemons (state, pokemons) {
    state.pokemons = pokemons
    state.isLoading = false
}

export function getPokemonById (state, pokemon) {

    state.isLoading = true

    if (pokemon == 404) {
        state.error = 'No se encontro el pokemon';
        state.isLoading = false
        return
    }

    state.pokemon = {
        name: pokemon.name,
        url: pokemon.url
    }
    state.isLoading = false
}

export function cleanPokemonById(state) {
    state.pokemon = {}
}

export function cleanError(state) {
    state.error = ''
}

export function updatePagination(state, offset) {
    state.offset = offset
}
export function onLoading(state) {
    state.isLoading = true
}
export function offLoading(state) {
    state.isLoading = false
}

export function getPokemonByIdDetails (state, pokemon) {

    state.isLoading = true

    if (pokemon == 404) {
        state.error = 'No se encontro el pokemon';
        state.isLoading = false
        return
    }

    state.pokemon = {
        name: pokemon.name,
        url: pokemon.url,
        types: pokemon.types,
        stats: pokemon.stats
    }
    state.isLoading = false
}