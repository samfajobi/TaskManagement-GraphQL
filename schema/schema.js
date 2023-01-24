const graphql = require("graphql");
const Staff = require("../model/Staff");
const Task = require("../model/Task");

// const  {Staff, Task } = require("./testData")


const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
    GraphQLList,
    GraphQLInt 
} = graphql;

   

// GraphQL Schemas
const StaffType = new GraphQLObjectType({
    name: "Staff",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});


const TaskType = new GraphQLObjectType({
    name: "Task",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        staff: {
            type: StaffType,
            resolve(parent, args){
                return Staff.findById(parent.clientID)
            }
        }
    })  
});



//GraphQL RootQueries
const RootQuery = new GraphQLObjectType({
    name: "RootQueries",
    fields: {
        staff: {
            type: StaffType,
            args: {id : {type: GraphQLID}},
            resolve(parent, args) {
                return Staff.findById(args.id)
            }
        },
        staffs: {
            type: new GraphQLList(StaffType),
            resolve(parent, args) {
                return Staff.find({})
            }
        },
        task: {
            type: TaskType,
            args: {id : {type: GraphQLID}},
            resolve(parent, args) {   
                return Task.findById(args.id)
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.find({})
            }
        }
    }
});





console.log(Task);

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
});