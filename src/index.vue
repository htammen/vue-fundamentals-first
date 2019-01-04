<!--<style>
    h2{
        color: red;
    }
</style>
-->
<template>
  <div>
    <FdTable selectionMode="single" :data="tableData">
      <FdTableColumn sortable prop="id" label="Id" />
      <FdTableColumn sortable prop="userId" label="User Id" />
      <FdTableColumn sortable prop="title" label="Title" />
      <FdTableColumn label="Body">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.body }}</span>
        </template>
      </FdTableColumn>
    </FdTable>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel>First Name</FdFormLabel>
        <FdInput v-model="newEntry.firstName" placeholder="Enter something nice"/>
      </FdFormItem>
      <FdFormItem>
        <FdFormLabel>Last Name</FdFormLabel>
        <FdInput v-model="newEntry.lastName" placeholder="Enter something nice"/>
      </FdFormItem>
      <FdFormItem>
        <FdFormLabel>Rating</FdFormLabel>
        <FdCombobox v-model="newEntry.rating">
          <FdMenuItem value="1" title="1" @click="select('1')">1</FdMenuItem>
          <FdMenuItem value="2" title="2" @click="select('2')">2</FdMenuItem>
          <FdMenuItem value="3" title="3" @click="select('3')">3</FdMenuItem>
          <FdMenuItem value="4" title="4" @click="select('4')">4</FdMenuItem>
          <FdMenuItem value="4" title="5" @click="select('5')">5</FdMenuItem>
        </FdCombobox>
      </FdFormItem>
    </FdFormSet>
    <FdButton @click="addCurrentEntry">Add Entry</FdButton>
    <FdButton @click="getGithubData">Get Workouts</FdButton>
  </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return {
            newEntry: {
                firstName: null,
                lastName: null,
                rating: '1',
            },
            tableData: [
            ],
            };
        },

        methods: {

            addCurrentEntry() {
                const tableEntry = { ...this.newEntry, building: null, rating: this.newEntry.rating };
                this.tableData.push(tableEntry);
            },
            select(value) {
                this.newEntry.rating = value;
            },
            getGithubData() {
              axios.get(`http://jsonplaceholder.typicode.com/posts`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.tableData = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })

            },
            getRuntasticWorkouts()  {
//                var authenticate = require('runtastic-unofficial-api').authenticate
//
//                authenticate({email: "helmut.tammen@gmail.com", password: "M#RcHsiPBW5"})
//                    .then((result) => console.log(result))
//                     .catch((result) => console.log(result))
            },
        }
    }

/*
    module.exports = {
        methods: {
            addCurrentEntry() {
                const tableEntry = { ...this.newEntry, building: null, rating: this.newEntry.rating };
                this.tableData.push(tableEntry);
            },
            select(value) {
                this.newEntry.rating = value;
            },
            getGithubData() {
              axios.get(`http://jsonplaceholder.typicode.com/posts`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.posts = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })

            },
            getRuntasticWorkouts()  {
//                var authenticate = require('runtastic-unofficial-api').authenticate
//
//                authenticate({email: "helmut.tammen@gmail.com", password: "M#RcHsiPBW5"})
//                    .then((result) => console.log(result))
//                     .catch((result) => console.log(result))
            },
        },
        data: function(){
            return {
            newEntry: {
                firstName: null,
                lastName: null,
                rating: '1',
            },
            tableData: [
                { rating: 1, firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
                { rating: 2, firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
                { rating: 3, firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
                { rating: 4, firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
            ],
            };
        },
    }
*/

</script>