package com.monsanto.mbt;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.Test;

public class WidgetUtilsTest {
	private WidgetUtils widgetUtils ;
	
	@Test
	public void test_GetSampleWidgets(){
		widgetUtils = new WidgetUtils();
		Widget widget = new Widget(1, "Red", new Date());
		  List<Widget> widgets = Arrays.asList(widget);
		  widgetUtils.getSampleWidgets();
		
	}
	
	

}
