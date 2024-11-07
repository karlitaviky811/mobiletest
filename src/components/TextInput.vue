<template>
    <ion-input label-placement="floating" v-model="value" :placeholder="props.placeholder">
        <div slot="label">{{ props.label }} </div>
    </ion-input>
    
    {{ errorMessage }}
</template>

<script lang='ts' setup>
import { IonInput } from '@ionic/vue';
import { useField, validate } from 'vee-validate';
import { defineProps, computed } from 'vue';
import * as yup from 'yup';

const props  = defineProps<{
    name: string;
    required: boolean;
    label: string;
    placeholder: string;
}>();

const getRules = () => {

    const schema = yup.string();
    let validateSchema;

    if ( props.required ) {
        console.log('is required');
        validateSchema = schema.required();
    }

    return validateSchema;
}

const validationSchema = computed(() => {

    const schema = yup.string();
    let validateSchema;

    // yup.string().email().required())

    if ( props.required ) {
        console.log('is required');
        validateSchema = schema.required();
    }

    return validateSchema;
  
    });

const { value , errors, errorMessage } : any = useField(() => props.name, getRules());

</script>

<style scoped>

ion-input {
    --background: white;
}
</style>