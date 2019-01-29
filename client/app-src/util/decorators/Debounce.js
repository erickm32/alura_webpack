export function debounce(milissegundos = 500) {

    return function(target, key, descriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args) {

            args.forEach(argumento => {
                if(argumento.preventDefault()) argumento.preventDefault();
            });
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }

        return descriptor;
    }
}