<template>
  <div>
    <h2>{{ $t('app.aside.nav.button') }}</h2>
    <p class="tip">按钮，查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'button'}}">API</router-link>，可以通过 <router-link class="link" :to="{name: 'StartGlobal'}">setup</router-link> 设置全局参数</p>

    <p>
      <vxe-button>默认尺寸</vxe-button>
      <vxe-button size="medium">中等尺寸</vxe-button>
      <vxe-button size="small">小型尺寸</vxe-button>
      <vxe-button size="mini">超小尺寸</vxe-button>
    </p>

    <p>
      <vxe-button size="mini">
        <template>超小下拉按钮</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="small">
        <template>小型下拉按钮</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="medium">
        <template>中等下拉按钮</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button>
        <template>默认下拉按钮</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
    </p>

    <p>
      <vxe-button type="text">默认颜色</vxe-button>
      <vxe-button type="text" status="primary">主要颜色</vxe-button>
      <vxe-button type="text" status="success">成功颜色</vxe-button>
      <vxe-button type="text" status="info">信息颜色</vxe-button>
      <vxe-button type="text" status="warning">警告颜色</vxe-button>
      <vxe-button type="text" status="danger">危险颜色</vxe-button>
    </p>

    <p>
      <vxe-button type="text" disabled>默认禁用颜色</vxe-button>
      <vxe-button type="text" status="primary" disabled>主要禁用颜色</vxe-button>
      <vxe-button type="text" status="success" disabled>成功禁用颜色</vxe-button>
      <vxe-button type="text" status="info" disabled>信息禁用颜色</vxe-button>
      <vxe-button type="text" status="warning" disabled>警告禁用颜色</vxe-button>
      <vxe-button type="text" status="danger" disabled>危险禁用颜色</vxe-button>
    </p>

    <p>
      <vxe-button type="text" loading>默认颜色</vxe-button>
      <vxe-button type="text" status="primary" loading>主要颜色</vxe-button>
      <vxe-button type="text" status="success" loading>成功颜色</vxe-button>
      <vxe-button type="text" status="info" loading>信息颜色</vxe-button>
      <vxe-button type="text" status="warning" loading>警告颜色</vxe-button>
      <vxe-button type="text" status="danger" loading>危险颜色</vxe-button>
    </p>

    <p>
      <vxe-button>默认颜色</vxe-button>
      <vxe-button status="primary">主要颜色</vxe-button>
      <vxe-button status="success">成功颜色</vxe-button>
      <vxe-button status="info">信息颜色</vxe-button>
      <vxe-button status="warning">警告颜色</vxe-button>
      <vxe-button status="danger">危险颜色</vxe-button>
    </p>

    <p>
      <vxe-button disabled>默认禁用颜色</vxe-button>
      <vxe-button status="primary" disabled>主要禁用颜色</vxe-button>
      <vxe-button status="success" disabled>成功禁用颜色</vxe-button>
      <vxe-button status="info" disabled>信息禁用颜色</vxe-button>
      <vxe-button status="warning" disabled>警告禁用颜色</vxe-button>
      <vxe-button status="danger" disabled>危险禁用颜色</vxe-button>
    </p>

    <p>
      <vxe-button loading>默认颜色</vxe-button>
      <vxe-button status="primary" loading>主要颜色</vxe-button>
      <vxe-button status="success" loading>成功颜色</vxe-button>
      <vxe-button status="info" loading>信息颜色</vxe-button>
      <vxe-button status="warning" loading>警告颜色</vxe-button>
      <vxe-button status="danger" loading>危险颜色</vxe-button>
    </p>

    <p>
      <vxe-button transfer>
        <template>默认颜色</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="primary" transfer>
        <template>主要颜色</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="success" transfer>
        <template>成功颜色</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="info" transfer>
        <template>信息颜色</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="warning" transfer>
        <template>警告颜色</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
      <vxe-button status="danger" transfer>
        <template>危险颜色</template>
        <template v-slot:dropdowns>
          <vxe-button type="text">下拉按钮1</vxe-button>
          <vxe-button type="text">下拉按钮2</vxe-button>
          <vxe-button type="text">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
    </p>

    <p>
      <vxe-button icon="fa fa-plus">默认图标颜色</vxe-button>
      <vxe-button status="primary" icon="fa fa-save">主要图标颜色</vxe-button>
      <vxe-button status="success" icon="fa fa-check">成功图标颜色</vxe-button>
      <vxe-button status="info" icon="fa fa-info">信息图标颜色</vxe-button>
      <vxe-button status="warning" icon="fa fa-warning">警告图标颜色</vxe-button>
      <vxe-button status="danger" icon="fa fa-trash-o">危险图标颜色</vxe-button>
    </p>

    <p>
      <vxe-button icon="fa fa-download">默认图标颜色</vxe-button>
      <vxe-button icon="fa fa-save vxe-primary-color">主要图标颜色</vxe-button>
      <vxe-button icon="fa fa-check vxe-success-color">成功图标颜色</vxe-button>
      <vxe-button icon="fa fa-info vxe-info-color">信息图标颜色</vxe-button>
      <vxe-button icon="fa fa-warning vxe-warning-color">警告图标颜色</vxe-button>
      <vxe-button icon="fa fa-trash-o vxe-danger-color">危险图标颜色</vxe-button>
    </p>

    <p>
      <vxe-button round>圆角按钮</vxe-button>
      <vxe-button loading round>圆角按钮</vxe-button>
      <vxe-button status="primary" round>主要颜色</vxe-button>
      <vxe-button status="success" round>成功颜色</vxe-button>
      <vxe-button status="info" round>信息颜色</vxe-button>
      <vxe-button status="warning" round>警告颜色</vxe-button>
      <vxe-button status="danger" round>危险颜色</vxe-button>
    </p>

    <p>
      <vxe-button icon="fa fa-plus" circle></vxe-button>
      <vxe-button loading circle></vxe-button>
      <vxe-button status="primary" icon="fa fa-save" circle></vxe-button>
      <vxe-button status="success" icon="fa fa-check" circle></vxe-button>
      <vxe-button status="info" icon="fa fa-info" circle></vxe-button>
      <vxe-button status="warning" icon="fa fa-warning" circle></vxe-button>
      <vxe-button status="danger" icon="fa fa-trash-o" circle></vxe-button>
    </p>

    <p>
      <vxe-button icon="fa fa-plus"></vxe-button>
      <vxe-button loading></vxe-button>
      <vxe-button status="primary" icon="fa fa-save"></vxe-button>
      <vxe-button status="success" icon="fa fa-check"></vxe-button>
      <vxe-button status="info" icon="fa fa-info"></vxe-button>
      <vxe-button status="warning" icon="fa fa-warning"></vxe-button>
      <vxe-button status="danger" icon="fa fa-trash-o"></vxe-button>
    </p>

    <p>
      <vxe-button type="text" icon="fa fa-plus">默认图标颜色</vxe-button>
      <vxe-button type="text" status="primary" icon="fa fa-save">主要图标颜色</vxe-button>
      <vxe-button type="text" status="success" icon="fa fa-check">成功图标颜色</vxe-button>
      <vxe-button type="text" status="info" icon="fa fa-info">信息图标颜色</vxe-button>
      <vxe-button type="text" status="warning" icon="fa fa-warning">警告图标颜色</vxe-button>
      <vxe-button type="text" status="danger" icon="fa fa-trash-o">危险图标颜色</vxe-button>
    </p>

    <p>
      <vxe-button type="text" icon="fa fa-plus"></vxe-button>
      <vxe-button type="text" icon="fa fa-refresh"></vxe-button>
      <vxe-button status="primary" icon="fa fa-download">图标按钮</vxe-button>
      <vxe-button status="my-purple" icon="fa fa-save">自定义按钮颜色</vxe-button>
      <vxe-button icon="fa fa-graduation-cap my-green">自定义图标颜色</vxe-button>
    </p>

    <pre>
      <code>
        | Tab | 切换到上一个 |
        | Shift Tab | 切换到下一个 |
        | Spacebar | 按下点击 |
        | Enter | 点击 |
      </code>
    </pre>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="html">{{ demoCodes[0] }}</code>
      <code class="css">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data  () {
    return {
      demoCodes: [
        `
        <p>
          <vxe-button>默认尺寸</vxe-button>
          <vxe-button size="medium">中等尺寸</vxe-button>
          <vxe-button size="small">小型尺寸</vxe-button>
          <vxe-button size="mini">超小尺寸</vxe-button>
        </p>

        <p>
          <vxe-button size="mini">
            <template>超小下拉按钮</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button size="small">
            <template>小型下拉按钮</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button size="medium">
            <template>中等下拉按钮</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button>
            <template>默认下拉按钮</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
        </p>

        <p>
          <vxe-button type="text">默认颜色</vxe-button>
          <vxe-button type="text" status="primary">主要颜色</vxe-button>
          <vxe-button type="text" status="success">成功颜色</vxe-button>
          <vxe-button type="text" status="info">信息颜色</vxe-button>
          <vxe-button type="text" status="warning">警告颜色</vxe-button>
          <vxe-button type="text" status="danger">危险颜色</vxe-button>
        </p>

        <p>
          <vxe-button type="text" disabled>默认禁用颜色</vxe-button>
          <vxe-button type="text" status="primary" disabled>主要禁用颜色</vxe-button>
          <vxe-button type="text" status="success" disabled>成功禁用颜色</vxe-button>
          <vxe-button type="text" status="info" disabled>信息禁用颜色</vxe-button>
          <vxe-button type="text" status="warning" disabled>警告禁用颜色</vxe-button>
          <vxe-button type="text" status="danger" disabled>危险禁用颜色</vxe-button>
        </p>

        <p>
          <vxe-button type="text" loading>默认颜色</vxe-button>
          <vxe-button type="text" status="primary" loading>主要颜色</vxe-button>
          <vxe-button type="text" status="success" loading>成功颜色</vxe-button>
          <vxe-button type="text" status="info" loading>信息颜色</vxe-button>
          <vxe-button type="text" status="warning" loading>警告颜色</vxe-button>
          <vxe-button type="text" status="danger" loading>危险颜色</vxe-button>
        </p>

        <p>
          <vxe-button>默认颜色</vxe-button>
          <vxe-button status="primary">主要颜色</vxe-button>
          <vxe-button status="success">成功颜色</vxe-button>
          <vxe-button status="info">信息颜色</vxe-button>
          <vxe-button status="warning">警告颜色</vxe-button>
          <vxe-button status="danger">危险颜色</vxe-button>
        </p>

        <p>
          <vxe-button disabled>默认禁用颜色</vxe-button>
          <vxe-button status="primary" disabled>主要禁用颜色</vxe-button>
          <vxe-button status="success" disabled>成功禁用颜色</vxe-button>
          <vxe-button status="info" disabled>信息禁用颜色</vxe-button>
          <vxe-button status="warning" disabled>警告禁用颜色</vxe-button>
          <vxe-button status="danger" disabled>危险禁用颜色</vxe-button>
        </p>

        <p>
          <vxe-button loading>默认颜色</vxe-button>
          <vxe-button status="primary" loading>主要颜色</vxe-button>
          <vxe-button status="success" loading>成功颜色</vxe-button>
          <vxe-button status="info" loading>信息颜色</vxe-button>
          <vxe-button status="warning" loading>警告颜色</vxe-button>
          <vxe-button status="danger" loading>危险颜色</vxe-button>
        </p>

        <p>
          <vxe-button transfer>
            <template>默认颜色</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="primary" transfer>
            <template>主要颜色</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="success" transfer>
            <template>成功颜色</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="info" transfer>
            <template>信息颜色</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="warning" transfer>
            <template>警告颜色</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="danger" transfer>
            <template>危险颜色</template>
            <template v-slot:dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
        </p>

        <p>
          <vxe-button icon="fa fa-plus">默认图标颜色</vxe-button>
          <vxe-button status="primary" icon="fa fa-save">主要图标颜色</vxe-button>
          <vxe-button status="success" icon="fa fa-check">成功图标颜色</vxe-button>
          <vxe-button status="info" icon="fa fa-info">信息图标颜色</vxe-button>
          <vxe-button status="warning" icon="fa fa-warning">警告图标颜色</vxe-button>
          <vxe-button status="danger" icon="fa fa-trash-o">危险图标颜色</vxe-button>
        </p>

        <p>
          <vxe-button icon="fa fa-download">默认图标颜色</vxe-button>
          <vxe-button icon="fa fa-save vxe-primary-color">主要图标颜色</vxe-button>
          <vxe-button icon="fa fa-check vxe-success-color">成功图标颜色</vxe-button>
          <vxe-button icon="fa fa-info vxe-info-color">信息图标颜色</vxe-button>
          <vxe-button icon="fa fa-warning vxe-warning-color">警告图标颜色</vxe-button>
          <vxe-button icon="fa fa-trash-o vxe-danger-color">危险图标颜色</vxe-button>
        </p>

        <p>
          <vxe-button round>圆角按钮</vxe-button>
          <vxe-button loading round>圆角按钮</vxe-button>
          <vxe-button status="primary" round>主要颜色</vxe-button>
          <vxe-button status="success" round>成功颜色</vxe-button>
          <vxe-button status="info" round>信息颜色</vxe-button>
          <vxe-button status="warning" round>警告颜色</vxe-button>
          <vxe-button status="danger" round>危险颜色</vxe-button>
        </p>

        <p>
          <vxe-button icon="fa fa-plus" circle></vxe-button>
          <vxe-button loading circle></vxe-button>
          <vxe-button status="primary" icon="fa fa-save" circle></vxe-button>
          <vxe-button status="success" icon="fa fa-check" circle></vxe-button>
          <vxe-button status="info" icon="fa fa-info" circle></vxe-button>
          <vxe-button status="warning" icon="fa fa-warning" circle></vxe-button>
          <vxe-button status="danger" icon="fa fa-trash-o" circle></vxe-button>
        </p>

        <p>
          <vxe-button icon="fa fa-plus"></vxe-button>
          <vxe-button loading></vxe-button>
          <vxe-button status="primary" icon="fa fa-save"></vxe-button>
          <vxe-button status="success" icon="fa fa-check"></vxe-button>
          <vxe-button status="info" icon="fa fa-info"></vxe-button>
          <vxe-button status="warning" icon="fa fa-warning"></vxe-button>
          <vxe-button status="danger" icon="fa fa-trash-o"></vxe-button>
        </p>

        <p>
          <vxe-button type="text" icon="fa fa-plus">默认图标颜色</vxe-button>
          <vxe-button type="text" status="primary" icon="fa fa-save">主要图标颜色</vxe-button>
          <vxe-button type="text" status="success" icon="fa fa-check">成功图标颜色</vxe-button>
          <vxe-button type="text" status="info" icon="fa fa-info">信息图标颜色</vxe-button>
          <vxe-button type="text" status="warning" icon="fa fa-warning">警告图标颜色</vxe-button>
          <vxe-button type="text" status="danger" icon="fa fa-trash-o">危险图标颜色</vxe-button>
        </p>

        <p>
          <vxe-button type="text" icon="fa fa-plus"></vxe-button>
          <vxe-button type="text" icon="fa fa-refresh"></vxe-button>
          <vxe-button status="primary" icon="fa fa-download">图标按钮</vxe-button>
          <vxe-button status="my-purple" icon="fa fa-save">自定义按钮颜色</vxe-button>
          <vxe-button icon="fa fa-graduation-cap my-green">自定义图标颜色</vxe-button>
        </p>
        `,
        `
        .vxe-button.type--button.theme--my-purple,
        .vxe-button.type--button.theme--my-purple:hover {
          color: #fff;
        }
        .vxe-button.type--button.theme--my-purple {
          background-color: #800080;
        }
        .vxe-button.type--button.theme--my-purple:active {
          background-color: #a50aa5;
        }
        .my-green {
          color: #008000;
        }
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>

<style>
.vxe-button.type--button.theme--my-purple,
.vxe-button.type--button.theme--my-purple:hover {
  color: #fff;
}
.vxe-button.type--button.theme--my-purple {
  background-color: #800080;
}
.vxe-button.type--button.theme--my-purple:active {
  background-color: #a50aa5;
}
.my-green {
  color: #008000;
}
</style>
