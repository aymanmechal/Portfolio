export const useResourceStore = defineStore('resources', {
    state: () => ({
        rscMailObject: [
            { id: 'contact', label: "Prise de contact"}
        ]
    }),
    getters: {
        getNotDisabled: (state) => state.rscMailObject.filter((el) => !el.disabled)
    },
    actions: {
        login(){
            console.log()
        }
    }
})
