<h4 align="center"> React Expand/Collapse Example Project </h4>

[LIVE](https://ahmetkuslular.github.io/ak-react-collapse/)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [yarn](https://yarnpkg.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/ahmetkuslular/react-expand-collapse-example.git

# Go into the repository
$ cd react-expand-collapse-example

# Install dependencies
$ yarn

# Run the app
$ yarn start

# Run the test
$ yarn test
```

## API

### Collapse

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
        <th>REQUIRED</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>data</td>
          <td>Array<String></td>
          <th>-</th>
          <td>For simplicity, data is just a plain array</td>
          <td>No</td>
      </tr>
       <tr>
            <td>renderItem</td>
            <td>function</td>
            <th>-</th>
            <td>Takes an item from data and renders it into the list.</td>
            <td>No / if data is available Yes </td>
        </tr>
        <tr>
            <td>onChange</td>
            <td>function</td>
            <th>-</th>
            <td>Callback function executed when active panel is changed.</td>
            <td> No</td>
        </tr>
        <tr>
            <td>activeKey</td>
            <td>string[]|string| number[]|number</td>
            <th>-</th>
            <td>Key of the active panel</td>
            <td> No</td>
        </tr>
         <tr>
            <td>defaultActiveKey</td>
            <td>string[]|string| number[]|number</td>
            <th>-</th>
            <td>Key of the initial active panel</td>
            <td> No</td>
        </tr>
        <tr>
                    <td>children</td>
                    <td>node (CollapseItem)</td>
                    <th>-</th>
                    <td></td>
                    <td> No</td>
                </tr>
    </tbody>
</table>

### CollapseItem

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
        <th>REQUIRED</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>label</td>
          <td>string or node</td>
          <th>-</th>
          <td>Header content of CollapseItem</td>
          <td>No</td>
      </tr>
      <tr>
            <td>labelStyle</td>
            <td>object</td>
            <th>-</th>
            <td>Custom label style</td>
            <td>No</td>
        </tr>
        <tr>
            <td>headerStyle</td>
            <td>object</td>
            <th>-</th>
            <td>Custom header style</td>
            <td>No</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>node</td>
            <th>arrow icon</th>
            <td>specific the custom icon.</td>
            <td>No</td>
        </tr>
        <tr>
            <td>showIcon</td>
            <td>boolean</td>
            <th>true</th>
            <td>show icon beside header</td>
            <td>No</td>
        </tr>
        <tr>
            <td>useIconAnimation</td>
            <td>boolean</td>
            <th>true(using default animation- rotate 90)</th>
            <td>use icon animation</td>
            <td>No</td>
        </tr>
         <tr>
            <td>animationOptions(only for icon)</td>
            <td>object</td>
            <th>{ duration:500, animationZ:90}</th>
            <td>https://github.com/google-fabric/velocity-react</td>
            <td>No</td>
        </tr>
         <tr>
            <td>openColor</td>
            <td>string</td>
            <th>#f50</th>
            <td>Custom open color</td>
            <td>No</td>
        </tr>
        <tr>
            <td>closeColor</td>
            <td>string</td>
            <th>#b5b5b5</th>
            <td>Custom close color</td>
            <td>No</td>
        </tr>
    </tbody>
</table>

## Packages

This software uses the following open source packages:

- [react](https://reactjs.org/)

## TODO...

- Diffrent type(tree, etc)
