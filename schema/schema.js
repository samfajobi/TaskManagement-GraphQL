const graphql = require("graphql");
const Staff = require("../model/staff");
const Task = require("../model/task");

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
})


const TaskType = new GraphQLObjectType({
    name: "Taks",
    fields: () => ({

    })
})



//GraphQL RootQueries
const RootQuery = new GraphQLObjectType({
    name: "RootQueries",
    fields: {
        staff: {
            type: StaffType,
            args: {id : {type: GraphQLID}},
            resolve(parent, args) {
                return Staff.find(staff => staff.id === args.id)
            }
        }
    }
});


module.exports = new graphql.GraphQLSchema({
    query: RootQuery
});