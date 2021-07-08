export interface IObject { id: number; name: string }

export function binarySearch(input: IObject[], findId: number) {
    let from = 0;
    let to = input.length;
    let foundedObject: IObject = null;
    // let numberOfIterations = 0;

    while (!foundedObject) {

        let center = Math.round((to-from) / 2);
        let centerItem: IObject = input[to-center];

        if(centerItem.id === findId) {
            foundedObject = centerItem;
        } else if(centerItem.id < findId) {
            from = to-center;
        } else if(centerItem.id > findId) {
            to  = center + from;
        } else if((to-from) === 0) {
            break;
        }

        if((to-from) < 20) {
            for(let i = from; i < to; i++) {
                if(input[i].id === findId) {
                    foundedObject = input[i];
                    break;
                }
                // numberOfIterations++;
            }

            break;
        }

        //numberOfIterations++;
    }

    // console.log(numberOfIterations)

    return foundedObject;
}