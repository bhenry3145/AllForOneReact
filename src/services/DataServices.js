const AddingNumbersFetch = async (userInput, userInput2) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/AddingTwoNumbers/Add2Numbers/${userInput}/${userInput2}`);
    const data = promise.text();
    return data;
}

const AskingQuestionsFetch = async (userInput, userInput2) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/TwoQuestions/WakeupTime/${userInput}/${userInput2}`);
    const data = promise.text();
    return data;
}

const ComparingNumbersFetch = async (userInput, userInput2) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/TwoNumbersSentences/2Numbers/${userInput}/${userInput2}`);
    const data = promise.text();
    return data;
}

const GetHelloWorldFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/SayHello/AddName/${userInput}`);
    const data = promise.text();
    return data;
}

const MadlibFetch = async (userInput, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/Madlib/Madlib/${userInput}/${userInput2}/${userInput3}/${userInput4}/${userInput5}/${userInput6}/${userInput7}/${userInput8}/${userInput9}/${userInput10}`);
    const data = promise.text();
    return data;
}

const Magic8BallFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/Magic8Ball/EightBall/${userInput}`);
    const data = promise.text();
    return data;
}

const OddOrEvenFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${userInput}`);
    const data = promise.text();
    return data;
}

const RestaurantPickerFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${userInput}`);
    const data = await promise.text();
    return data;
}

const ReverseItAlphaFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/ReverseItAlpha/ReverseItAlpha/${userInput}`);
    const data = promise.text();
    return data;
}

const ReverseItNumbersFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/ReverseItNumbers/ReverseIt/${userInput}`);
    const data = promise.text();
    return data;
}

export { AddingNumbersFetch, AskingQuestionsFetch, ComparingNumbersFetch, GetHelloWorldFetch, MadlibFetch, Magic8BallFetch, OddOrEvenFetch, RestaurantPickerFetch, ReverseItAlphaFetch, ReverseItNumbersFetch}