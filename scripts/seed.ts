const {PrismaClient} = require("@prisma/client");

const database = new PrismaClient();

async function main(){
    try {
        await database.category.createMany({
            data: [
                {
                    name: "Computer Science"
                },

                {
                    name: "Medical Sciences"
                },

                {
                    name: "Chemistry"
                },

                {
                    name: "Economics"
                },

                {
                    name: "Legal Studies"
                },

                {
                    name: "Psychology"
                },
            ]
        });

        console.log("Success");
        
    } catch (error) {
        console.log("Error seeding the database categories", error)
    } finally {
        await database.$disconnect();
    }
}

main();