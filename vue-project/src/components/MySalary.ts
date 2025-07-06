import { ref } from "vue";

export default function () {
    const username = ref('roy')
    let salary = ref(1500)
    function addsalary() {
        salary = ref(20000)
        console.log(salary)
    }
    return {
        username, salary, addsalary
    };
}
