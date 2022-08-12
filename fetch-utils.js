const SUPABASE_URL = 'https://sushgnkqkgfdkwxudpdy.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1c2hnbmtxa2dmZGt3eHVkcGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwNjEyMDEsImV4cCI6MTk3NTYzNzIwMX0.PWaLx9CyI6jaOzBx-1JPnId6_IrMlC4rYSEFZtsLwPw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(poll) {
    const response = await client.from('polls').insert({ question: poll.question, answer1: poll.answer1, answer2: poll.answer2, votes1: poll.votes1, votes2: poll.votes2 });

    return checkError(response);
}
export async function getPolls() {
    const response = await client.from('polls').select('*');

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}