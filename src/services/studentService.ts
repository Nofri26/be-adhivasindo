import axios from 'axios';

interface Student {
    [key: string]: string;
}

let cachedStudents: Student[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 10 * 60 * 1000; //10 menit

export const StudentService = {
    fetchAllData: async () => {
        const currentTime = Date.now();

        if (cachedStudents && currentTime - lastFetchTime < CACHE_DURATION) {
            console.log('From cache');
            return cachedStudents;
        }

        console.log('From API');
        const response = await axios.get('https://ogienurdiana.com/career/ecc694ce4e7f6e45a5a7912cde9fe131');
        const rawData = response.data.DATA;

        cachedStudents = parseStudentData(rawData);
        lastFetchTime = currentTime;

        return cachedStudents;
    },

    findStudents: async (key: string, value: string) => {
        const students = await StudentService.fetchAllData();

        return students.filter((student) => student[key] === value);
    },
};

const parseStudentData = (data: string) => {
    const rows = data.split('\n');
    const headers = rows[0].split('|');

    return rows.slice(1).map((row) => {
        const values = row.split('|');
        return headers.reduce(
            (acc, header, index) => {
                acc[header] = values[index];
                return acc;
            },
            {} as Record<string, string>
        );
    });
};
