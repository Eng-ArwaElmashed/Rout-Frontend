var qoutes = [
    { q: "“Be yourself; everyone else is already taken.”", a: "― Oscar Wilde" },
    { q: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", a: "― Marilyn Monroe" },
    {q:"“So many books, so little time.”",a:"― Frank Zappa"},
    {q:"“A room without books is like a body without a soul.”",a:"― Marcus Tullius Cicero"},
    {q:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",a:"― Dr. Seuss"},
    {q:"“You only live once, but if you do it right, once is enough.”",a:"― Mae West"},
    {q:"“Be the change that you wish to see in the world.”",a:"― Mahatma Gandhi"},
    {q:"“In three words I can sum up everything I've learned about life: it goes on.”",a:"― Robert Frost"},
    {q:"Mark Twain“If you tell the truth, you don't have to remember anything.”",a:"― Mark Twain"},
    {q:"“Always forgive your enemies; nothing annoys them so much.”",a:"― Oscar Wilde"},
    {q:"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",a:"― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"},
    {q:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",a:"― ― Mahatma Gandhi"},
    {q:"“We accept the love we think we deserve.”",a:"― Frank Zappa"},
    
]
function newQoute() {
    var random=Math.floor(Math.random() * 14);
    document.getElementById("qoute").innerHTML = qoutes[random].q;
    document.getElementById("author").innerHTML=qoutes[random].a;
}