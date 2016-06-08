<!--
  You better keep the css file path as is,
  since it's automatically built by Gulp
  and automatically inlined afterwards.
-->
<link href="../../styles/source-stylesheet.css" rel="stylesheet">
<mjml>
  <mj-body>
    <mj-container class="theme-{{_d.theme}}">
      <mj-raw>
        <!--
          Some raw HTML code.
        -->
      </mj-raw>
<!-- PREHEADER -->
      <mj-section class="section-header">
        <mj-column>{{> preheader}}</mj-column>
      </mj-section>
<!-- BODY -->
      <mj-section>
        <mj-column>
<!-- actual content -->
          {{> content}}
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>
