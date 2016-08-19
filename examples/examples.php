<?php
session_start();
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Examples Blockly@rduino</title>
<script type="text/javascript" src="./utils/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="./utils/bootstrap.min.3.3.6.js"></script>
<script type="text/javascript" src="./utils/bootstrap-toggle.min.js"></script>
<script type="text/javascript" src="./utils/examples.js"></script>

<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="./css/blockly@rduino.css">
<link rel="stylesheet" type="text/css" href="./css/bootstrap-toggle.min.css" />
</head>

<body>
<div class="container-fluid">
<?php
$password = 'd339669559aec82dabd05adb07a91c41';

if (!isset($_SESSION['connected']) 
	&& isset($_POST['password']) 
	&& md5($_POST['password']) == $password) {
     $_SESSION['connected'] = 'ok';
}

if (!isset($_SESSION['connected'])) {
?>
<div class="text-center">
<div class="row margin-top-10">
	<div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
		<div class="panel panel-primary">
			<div class="panel-heading">Connection</div>
			<div class="panel-body">
				<form class="form-horizontal" action="" method="POST">
					<div class="form-group">
						<label for="password" class="col-xs-4 control-label">Password</label>
						<div class="col-xs-8">
							<input type="password" class="form-control" id="password" name="password">
						</div>
					</div>
					<div class="form-group">
						<div class="col-xs-offset-4">
							<button type="submit" class="btn btn-success">OK</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</div>
<?php
} else  {
$path = './examples';

$directory = new RecursiveDirectoryIterator($path,RecursiveDirectoryIterator::SKIP_DOTS);
$iterator = new RecursiveIteratorIterator($directory,RecursiveIteratorIterator::SELF_FIRST);

$extensions = array("png", "jpg", "jpeg", "gif", "bmp");

foreach ($iterator as $fileinfo) {
	if (in_array(pathinfo($fileinfo->getFilename(), PATHINFO_EXTENSION), $extensions)) {
		$imageFiles[] = $fileinfo;
	}
	if (pathinfo($fileinfo->getFilename(), PATHINFO_EXTENSION) == "xml") {
		$xmlFiles[] = $fileinfo;
	}

	if ($fileinfo->isDir()) {
		$directories[] = $fileinfo;
	}				
}
?>			

<div id="divTitre">
<p><span id="title"></span></p>
    <button id="btn_logout" type="button" class="btn btn-danger btn-xs">
		<span class="glyphicon glyphicon-off"></span>		
        <span id="span_logout"> </span>
    </button>
<select id="languageMenu"></select>
</div>
<div class="text-center">
		<div class="table-responsive">
		<table class="table table-hover table-condensed">
				<thead>
					<tr>
						<th id="source_url"></th>
						<th id="source_text"></th>
						<th id="image"></th>
						<th id="link_url"></th>
						<th id="link_text"></th>
						<th id="visible"></th>
						<th><span id="action"></span></th>
					</tr>
				</thead>
				<tbody>
				<tr class="hide">
								<td>
								<div class="form-inline form-group">
									<select class="form-control">
										    <option value=""></option>
										    <?php
												foreach ($xmlFiles as $file) {
													echo "<option value=".str_replace('\\', '/', $file->getPathname()).">".$file->getFilename()."</option>";
												}
											?>
										</select>
									</div>
										<button class="btn btn-success" data-toggle="modal" data-target="#uploadModal">
											<span class="glyphicon glyphicon-upload"></span>
										</button>
									<input type="text" value="" class="hide">
								</td>
								<td><input type="text" value=""></td>
								<td>
									<div class="form-inline form-group">
										<select class="form-control">
										    <option value=""></option>
										    <?php
												foreach ($imageFiles as $file) {
												echo "<option value=".str_replace('\\', '/', $file->getPathname()).">".$file->getFilename()."</option>";
											}
									    ?>
										
										</select>
									</div>
										<button class="btn btn-success" data-toggle="modal" data-target="#uploadModal">
											<span class="glyphicon glyphicon-upload"></span>
										</button>
										<img class="vignette" src="" alt="">
										<input type="text" value="" class="hide"/>
								</td>
								<td><input type="text" value=""></td>
								<td><input type="text" value=""></td>
								<td>
									<label class="checkbox-inline">
									</label>
								</td>
								<td>
									<button class="btn btn-primary">
										<span class="glyphicon glyphicon-arrow-up"></span>
									</button>
									<button class="btn btn-primary">
										<span class="glyphicon glyphicon-arrow-down"></span>
									</button>
									<button class="btn btn-danger">
										<span class="glyphicon glyphicon-trash"></span>
									</button>
								</td>
								</tr>
			<?php
			if (file_exists('./examples/examples.json')) {
				$contents = file_get_contents("./examples/examples.json");
				$json = json_decode($contents); 
				foreach ($json as $example) {
					?>
							<tr>
								<td>
								<div class="form-inline form-group">
									<select class="form-control">
										    <option value=""></option>
										    <?php
												foreach ($xmlFiles as $file) {
													$pathName = str_replace('\\', '/', $file->getPathname());
													$selected = "";
													if ($example->source_url == $pathName) {
														$selected = "selected='selected'";
													}
													echo "<option value=".$pathName." ".$selected.">".$file->getFilename()."</option>";
												}
											?>
										</select>
									</div>
										<button class="btn btn-success" data-toggle="modal" data-target="#uploadModal">
											<span class="glyphicon glyphicon-upload"></span>
										</button>
									<input type="text" value="<?php echo $example->source_url;?>" class="hide">
								</td>
								<td><input type="text" value="<?php echo $example->source_text;?>"></td>
								<td>
									<div class="form-inline form-group">
										<select class="form-control">
										    <option value=""></option>
										    <?php
												foreach ($imageFiles as $file) {
												$pathName = str_replace('\\', '/', $file->getPathname());
												$selected = "";
												if ($example->image == $pathName) {
													$selected = "selected='selected'";
												}
												echo "<option value=".$pathName." ".$selected.">".$file->getFilename()."</option>";
											}
									    ?>
										
										</select>
									</div>
										<button class="btn btn-success" data-toggle="modal" data-target="#uploadModal">
											<span class="glyphicon glyphicon-upload"></span>
										</button>
										<img class="vignette" src="<?php echo $example->image;?>" alt="">
										<input type="text" value="<?php echo $example->image;?>" class="hide"/>
								</td>
								<td><input type="text" value="<?php echo $example->link_url;?>"></td>
								<td><input type="text" value="<?php echo $example->link_text;?>"></td>
								<td>
									<label class="checkbox-inline">
										<input data-toggle="toggle" type="checkbox" data-onstyle="success" <?php echo ($example->visible)?"checked='checked'":""?> />
									</label>
								</td>
								<td>
									<button class="btn btn-primary">
										<span class="glyphicon glyphicon-arrow-up"></span>
									</button>
									<button class="btn btn-primary">
										<span class="glyphicon glyphicon-arrow-down"></span>
									</button>
									<button class="btn btn-danger">
										<span class="glyphicon glyphicon-trash"></span>
									</button>
								</td>
							</tr>

	    	    	<?php
				}
			}
			?>
				</tbody>
			</table>
			<div style="margin-bottom:20px">
				<button id="add_line" class="btn btn-success">
					<span class="glyphicon glyphicon-plus"></span>
					<span id="span_addline"></span>
				</button>
			</div>
		</div>
		<div>
			<button id="generate" class="btn btn-success">
				<span class="glyphicon glyphicon-cog"></span>
				<span id="span_generate"></span>
			</button>
			<a href="" class="btn btn-danger">
				<span class="glyphicon glyphicon-refresh"></span>
				<span id="span_cancel"></span>
			</a>
		</div>
	</div>
</div>
<pre class="hide"></pre>
<!-- upload modal -->
<div class="modal fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title"><span id="uploadModalLabel"></span></h4>
      </div>
      <div class="modal-body">
		<form id="uploadForm" method="post" class="form-horizontal" action="upload.php" enctype="multipart/form-data">
		<div class="form-group">
			<label class="control-label col-xs-2"><span id="span_directory"></span></label>
			<div class="form-inline">
			<select class="form-control" name="directory" id="directory">
				<option value="newDir">  </option>
				<?php
					foreach ($directories as $file) {
						echo "<option value=".$file->getPathname()." ".$selected.">".$file->getPathname()."</option>";
					}
				?>
			</select>
			</div>
		</div>
		<div id="divNewDir" class="form-group">
			<div class="form-inline">
				<label class="control-label col-xs-2"><span id="span_new"></span> </label>
				<input id="newDir" class="form-control" type="text" value="">
				<button id="addDir" class="btn btn-primary">
						<span class="glyphicon glyphicon-plus-sign"></span>
				</button>
			</div>
		</div>
		<div class="form-group">
			<input id="inputFile" name="inputFile" type="file" class="hide">
			<label class="control-label col-xs-2"><span id="span_file"></span></label>
			<div class="input-group col-xs-9">
				<span class="input-group-btn">
					<a class="btn btn-primary" onclick="$('#inputFile').click();"><span id="span_browse"></span></a>
				</span>
				<input id="fileName" class="form-control" type="text" readonly="readonly">
			</div>
		</div>
		<div id="image_preview" class="hide">
				<img alt="" src="" class="vignette">
				<div class="caption">
					<h4></h4>
					<p></p>
				</div>
		</div>
		</form>
		<div id="msgUpload" class="hide"></div>
	  </div>
		<div class="modal-footer">
			<button id="btn_submit" class="btn btn-primary" type="button" disabled="disabled"><span id="span_validate"></span></button>
		</div>
    </div>
  </div>
</div>
<script type="text/javascript">
Examples.initServer();
</script>
</body>
</html>
<?php }?>